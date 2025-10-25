
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { EnAttente, Refuser, Publier} from "../pages/ui/buttons"

const TYPE = [
    {value:'en attente', name: 'En attente'},
    {value:'public', name: 'Public'},
    {value:'refusé', name: 'Refusé'},
    {value:'tout', name: 'tout'},
];

export default function FilterByType() {
    const pathname = usePathname();
    const SearchParams = useSearchParams();
    const router = useRouter();
    
    const handleFilterByType = (type) => {
        const params = new URLSearchParams(SearchParams);
        params.set('page', '1');
        params.set('type', type);
        router.replace(`${pathname}?${params.toString()}`)
    };

    return (
        <div>
            <EnAttente />
            <Publier />
            <Refuser />
        </div>
    )
}