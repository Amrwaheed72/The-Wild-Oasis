import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
    const queryClient = useQueryClient();

    const { idLoading: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success("cabin successfully deleted");
            queryClient.invalidateQueries({ //this make refetch the data after deleting
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { isDeleting, deleteCabin };
}