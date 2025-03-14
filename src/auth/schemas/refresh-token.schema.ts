import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { mongo } from "mongoose";

@Schema({versionKey: false, timestamps: true})
export class RefreshToken {
    @Prop({required: true})
    token: string;
    @Prop({required: true, type: mongoose.Types.ObjectId})
    userId: string;
    @Prop({required: true})
    expires: Date;
    
    created: Date;
    createdByIp: string;
    revoked: Date;
    revokedByIp: string;
    replacedByToken: string;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);