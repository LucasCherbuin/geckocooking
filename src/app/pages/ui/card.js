import {Card, CardHeader, CardFooter} from "@heroui/card";


export default function Card() {
    return (
        <card>
            <CardHeader>
                {recette.imageId}
            </CardHeader>
            <CardFooter>
                {recipe.titre}, 
                {!recipe.regimeId ? null : null}
            </CardFooter>
        </card>
    )
}
