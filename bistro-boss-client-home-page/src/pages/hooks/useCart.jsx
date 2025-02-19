
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const {refetch,data: cart = []} = useQuery({
    queryKey: ['cart'],
    queryFn: async() => {
        const res = await axiosSecure.get('/carts')
        return res.data
    }
  })
  return [cart,refetch]
}

export default useCart;