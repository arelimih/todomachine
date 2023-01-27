import React from "react";

import { ReactComponent as CheckPNG} from './check.svg'
import { ReactComponent as DeletePNG} from './delete.svg'
import './TodoIcon.css';

const iconTypes ={

"check": color =>( <CheckPNG className="Icon-svg Icon-svg--check" fill ={color}/>),
"delete": color=>(<DeletePNG className="Icon-svg Icon-svg--delete" fill={color}/>)


}

function TodoIcon({type,color='gray', onClick})
{
    return(
<span className={`Icon-container Icon-container--${type}`} onClick={onClick} >

    {iconTypes[type](color)}
</span>


    );

}

export {TodoIcon};