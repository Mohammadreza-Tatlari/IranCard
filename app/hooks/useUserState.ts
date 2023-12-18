import { create } from "zustand";
import Cookies from "js-cookie";
interface useUserStateProps{
    userName: string | undefined,
    isVerified: boolean | undefined;
    userJWT: string | undefined;
    onSetUserName: (data:string | undefined) => void;
    onSetVerified: (data:boolean | undefined) => void;
}

const useUserState = create<useUserStateProps>((set) => ({
    userName: Cookies.get('userName'),
    isVerified: Cookies.get('needToVerify') === 'true',
    userJWT: Cookies.get('JWTToken'),
    onSetUserName: (userName:string | undefined) => set({userName: userName}),
    onSetVerified: (isVerified:boolean | undefined) => set({isVerified: isVerified})
}))

export default useUserState;