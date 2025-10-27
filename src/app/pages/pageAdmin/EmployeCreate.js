import { SignupFormSchema } from "\u0016\u0016@/app/lib/definitions";
import employeCreateForm from "@/app/pages/ui/employeCreateForm";
import { employeConfirmation } from "@/app/pages/ui/pop-up";
import { Search } from "@/app/pages/ui/sreachingBar";

export function EmployeCreate() {
    return (
        <div>
            <employeCreateForm />
            <employeConfirmation />
        </div>
    )
}