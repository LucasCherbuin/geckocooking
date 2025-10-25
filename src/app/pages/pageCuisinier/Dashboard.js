import { statsConsultation, statsRecetteCree } from "../ui/statistique";
import { Carousel } from "\u0016\u0016@/components/ui/carousel";
import { FilterByType } from "../lib/filter"

export function cuisinerStats() {
    return (
        <dashboard>
            <FilterByType>
            <p>mes recettes</p> 
            <Carousel />
            </FilterByType>

            <br />

            <statistique>
                <statsRecetteCree />
                <statsConsultation />
            </statistique>
        </dashboard>
    )
}