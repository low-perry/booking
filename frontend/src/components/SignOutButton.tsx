import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";

const SignOutButton = () => {
    const navigate = useNavigate();
    const { showToast } = useAppContext();
    const queryClient = useQueryClient();
    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            showToast({message: "User logged out", type: "SUCCESS"});
            navigate("/");
        },
        onError: (error: Error) => {
            showToast({message: error.message, type: "ERROR"});
        },
    });
    const handleClick = () => {
        mutation.mutate();
    };
    return (
        <button className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100" onClick={handleClick}>
            Sign Out
        </button>
    );
};

export default SignOutButton;