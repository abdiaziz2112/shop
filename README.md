useEffect(()=>{
    // console.log("useEffect() called");
   // axios.get, axios.post, axios.put, axios.delete
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      console.log("res",res.data);
    }).catch((error)=>{
      console.log(error);
    })
 
  }, []);