import youtube from "../api/youtube";
const prisma = new prismaCLient();


export default async function ficheRecette(params) {
    const recettes = await prisma.recette.findMany();


    return (
        <fiche>
            <title>${title}</title>
            <regime>
             ${regimeId || null }
            </regime>

            <br />

                <youtube/>
 
            <br />

            <information>
                <div>
                    <ul>Temps de préaration</ul>
                    <ul>${tempsPreparation}</ul>
                </div>
                <div>
                    <ul>Temps de cuisson</ul>
                    <ul>${tempsCuisson}</ul>
                </div>
                <div>
                    <ul>Temps total</ul>
                    <ul>${tempsCuisson + tempsPreparation}</ul>
                </div>
                <div>
                    <ul>Difficulté</ul>
                    <ul>${difficulteId}</ul>
                </div>
            </information>

            <br />

                <div>
                    <ul>Ingredients</ul>
                    <ul>${ingredientId}</ul>
                </div>

            <br />

            <etapes>
                <ul>${"#"+ Etape.id}</ul>
                <ul>${etape[1,4]}</ul>
            </etapes>

        </fiche>

        

    )
    
}