import { useState } from "react"

const Section = ({Title, Description, isVisible, setIsVisible}) => {

    function handleOnClick(){
        setIsVisible(!isVisible)
        return se;
    }

    return(
        
        <div className="p-2 m-2 border border-black">
            <h1 className="font-bold text-2xl">{Title}</h1>
            {isVisible ? (<button className="underline" onClick={handleOnClick}>Hide</button>
              ) : (<button className="underline" onClick={handleOnClick}>Show</button>)}
            
            {isVisible && <p>{Description}</p>}

        </div>
    )
}

const Instamart = () => {
    const[visibleSection, setVisibleSection] = useState("about")
    return(
        <>
            <div className="m-4 p-4">
                <h1>Assume That theres 100's of components</h1>
                <h2>Used Lazy loading in this component. Two JS files should have been bundled</h2>
            </div>
            <div>
               <Section 
                Title={"About Section" }
                // isVisible= {Title ===Title}
                // setIsVisible ={()=> setVisibleSection ==="about"}
                Description={
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                }/>               
                
                <Section 
                Title={"Careers"} 
                setIsVisible ={()=> setVisibleSection ==="careers"}

                isVisible= {visibleSection ==="careers"}
                Description={
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    }/>

                <Section 
                Title={"Teams"}
                isVisible= {visibleSection ==="teams"}
                setIsVisible ={()=> setVisibleSection ==="teams"} 
                Description={
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    }/>
            </div>
        </>
    )
}

export default Instamart;