import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryclient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: login, isPending: islogin } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryclient.setQueryData(['user'], user.user)
            navigate('/dashboard', { replace: true })
        },
        onError: (err) => {
            toast.error('email or password are not correct ')
            console.log("ERROR", err)
        }
    })
    return { login, islogin }
}