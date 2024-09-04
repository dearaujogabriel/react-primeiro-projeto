import { Circle } from "./Circle"
import { Square } from "./Square"

export const GeoForms = () => {
    return (
        <div>
            <h3 className="font-bold text-2xl">Formas Geometricas</h3>
            <div className="flex gap-2 border-2 p-3">
                <Square/>
            <Circle/>
            </div>
            
        </div>
        
    )
}