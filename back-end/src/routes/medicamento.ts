import { Router } from "express";
import { deleteMedicamento, getMedicamento, getMedicamentos, postMedicamento, updateMedicamento } from '../controllers/medicamento';
const router = Router();

router.get('/', getMedicamentos);
router.get('/:id', getMedicamento);
router.delete('/:id', deleteMedicamento);
router.post('/', postMedicamento);
router.put('/:id', updateMedicamento);
export default router;