import { toast } from 'react-hot-toast';

export class NotificationService {
    static SuccessToast(message: string) {
        toast.success(message);
    }

    static ErrorToast(message: string) {
        toast.error(message);
    }

    static CustomToast({ icon, message }: { icon: string; userName: string; message: string }) {
        toast.custom((t) => (
            <div
                className={`flex items-center max-w-md w-full p-4 space-x-4 ${
                    t.visible ? 'animate-enter' : 'animate-leave'
                }`}>
                <img className='h-10 w-10 rounded-full' src={icon} alt='notification-icon' />
                <div>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>{message}</p>
                </div>
            </div>
        ));
    }
}
