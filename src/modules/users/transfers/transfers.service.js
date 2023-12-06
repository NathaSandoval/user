
export class transferService {

    static async createRecordTranfer(amount, senderUserId, recipientUserId) {
        return await Transfer.create({
            amount,
            senderUserId,
            recipientUserId,
        });
    }
    
}