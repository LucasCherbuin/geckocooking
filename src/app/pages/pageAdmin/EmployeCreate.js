import { SignupFormSchema } from "\u0016\u0016@/app/lib/definitions";
import employeCreateForm from "\u0016\u0016@/app/ui/employeCreateForm";
import { employeConfirmation } from "\u0016\u0016@/app/ui/pop-up";
import { Search } from "\u0016\u0016@/app/ui/sreachingBar";

export function EmployeCreate() {
    return (
        <div>
            <employeCreateForm />
            <employeConfirmation />
        </div>
    )
}