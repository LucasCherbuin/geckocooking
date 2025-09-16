import { Session } from "../lib/session"


//récupère le role du profil conneceter
export async function getServerSideProps(context) {
    const session = await Session(context);
    const roles = session?.user?.roles || [];

    return {
        props: { roles },
    };
}

//retourn le role de l'utilisateur
export default function Home ({ roles }) {
    return (
        <div>
            <header roles={roles} />
        </div>
    )
}
