import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const ConfirmDialog = ({ open, onClose, onConfirm, productName }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirmar Eliminación</DialogTitle>
            <DialogContent>
                ¿Estás seguro de que deseas eliminar el producto "{productName}"?
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancelar</Button>
                <Button
                    onClick={() => {
                        onConfirm();  // Ejecuta la función de confirmación
                        onClose();  // Cierra el modal
                    }}
                    color="secondary"
                >
                    Eliminar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
