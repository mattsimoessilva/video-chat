import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PersonalRoom from '@/app/(root)/(home)/personal-room/page';
import { useUser } from '@clerk/nextjs';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useGetCallById } from '@/hooks/useGetCallById';

// Mock necessary hooks
jest.mock('@clerk/nextjs', () => ({
  useUser: jest.fn(),
}));

jest.mock('@stream-io/video-react-sdk', () => ({
  useStreamVideoClient: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/useGetCallById', () => ({
  useGetCallById: jest.fn(),
}));

jest.mock('@/components/ui/use-toast', () => ({
  useToast: jest.fn(),
}));

describe('PersonalRoom', () => {
  const mockRouterPush = jest.fn();
  const mockToast = jest.fn();

  beforeEach(() => {
    // Mock clipboard.writeText
    Object.defineProperty(global, 'navigator', {
      value: {
        clipboard: {
          writeText: jest.fn(),
        },
      },
    });

    // Reset mocks before each test
    jest.clearAllMocks();
    (useUser as jest.Mock).mockReturnValue({ user: { id: 'user123', username: 'TestUser' } });
    (useStreamVideoClient as jest.Mock).mockReturnValue({
      call: jest.fn().mockReturnValue({ getOrCreate: jest.fn() }),
    });
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
    (useGetCallById as jest.Mock).mockReturnValue({ call: null }); // Simulate no existing call
    (useToast as jest.Mock).mockReturnValue({ toast: mockToast });
  });

  it('should render the page correctly', () => {
    render(<PersonalRoom />);
    
    expect(screen.getByText("Personal Meeting Room")).toBeInTheDocument();
    expect(screen.getByText("TestUser's Meeting Room")).toBeInTheDocument();
    expect(screen.getByText("user123")).toBeInTheDocument();
  });

  it('should start the meeting when the "Start Meeting" button is clicked', async () => {
    render(<PersonalRoom />);
    
    const startButton = screen.getByText('Start Meeting');
    fireEvent.click(startButton);

    await waitFor(() => {
      expect(mockRouterPush).toHaveBeenCalledWith('/meeting/user123?personal=true');
    });
  });

  it('should copy the invitation link when the "Copy Invitation" button is clicked', async () => {
    render(<PersonalRoom />);
    
    const copyButton = screen.getByText('Copy Invitation');
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({ title: 'Link Copied' });
    });
  });
});
