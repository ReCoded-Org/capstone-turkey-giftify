import React from 'react';
// import ClothesBoard from '../../components/clothesBoard/ClothesBoard';
import {useHistory} from 'react-router-dom';

function Categories () {
    const history = useHistory();

return (
    
    <div>        
        <button onClick ={(event) => {
            event.preventDefault();
            history.push({
                pathname:  "/clothesboard",
            });
            }}>Clothes Board
        </button>
        <button onClick ={(event) => {
            event.preventDefault();
            history.push("/electricalToolsBoard")}}>Electrical Tools Board
        </button>
        
    </div>
)
}

export default Categories