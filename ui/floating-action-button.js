import { Fab } from '@mui/material/Fab';
import { User } from '@phosphor-icons/react';

export function FloatingAction() {
    return (
        <Fab size="medium" color="primary" aria-label="add">
            <User size={32} />
        </Fab>
    );
}
