import { Fab } from '@mui/material';
import { User } from '@phosphor-icons/react';

export function floatingAction() {
    return (
        <Fab size="medium" color="primary" aria-label="add">
            <User size={32} />
        </Fab>
    );
}
