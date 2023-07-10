import axios, {AxiosPromise} from "axios";
import { FoodData } from "../interface/FoodData";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";

const URL_API = 'http://localhost:8080';

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(URL_API + '/food', data)
    return response;
}
export function useFoodDataMutation(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}