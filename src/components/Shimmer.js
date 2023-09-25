const Shimmer = () => {
    return(
        <div className="flex flex-wrap ">
           {
            Array(10).fill("").map((e, index)=>(
                <div key={index} className="m-4 p-4 w-56 h-72 bg-gray-100 rounded-lg">

                </div>
            ))}
        </div>
    );
};

export default Shimmer;