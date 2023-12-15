import { create } from "zustand";
import Cookies from "js-cookie";
interface useUserStateProps{
    userName: string | undefined,
    isVerified: boolean | undefined;
    userJWT: string | undefined;
    onSetUserName: (data:string) => void;
    onSetVerified: (data:boolean) => void;
}

const useUserState = create<useUserStateProps>((set) => ({
    userName: Cookies.get('userName'),
    isVerified: Cookies.get('needToVerify') === 'true',
    userJWT: Cookies.get('JWTToken'),
    onSetUserName: (userName:string) => set({userName: userName}),
    onSetVerified: (isVerified:boolean) => set({isVerified: isVerified})
}))

export default useUserState;