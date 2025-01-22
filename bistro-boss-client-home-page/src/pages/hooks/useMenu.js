
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const useMenu =  () => {
//     const [menu,setMenu] = useState([]);
//     const [loading,setLoading] = useState(true);
//     useEffect(()=>{
//         fetch('http://localhost:5000/menu')
//         .then(res=>res.json())
//         .then(data=>{setMenu(data)
//         setLoading(false);
//         })
//     },[])
//     return [menu, loading]
        const axiosPublic = useAxiosPublic();
     const {data: menu =[], ispending: loading,refetch} = useQuery({
        querykey:['menu'],
        queryFn: async()=>{
            const res =  await axiosPublic.get('/menu');
            return res.data;
        }
     })

     return [menu,loading,refetch];
}

export default useMenu;