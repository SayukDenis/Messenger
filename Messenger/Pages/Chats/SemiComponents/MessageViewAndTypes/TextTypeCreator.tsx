import React from "react";
import { IMessageFactory } from "../Interfaces/IMessageFactory";
import { DefaultTextMessageProps } from "./Interfaces/IDefaultTextType";
import DefaultTextType from "./DefaultTextType";
import { ReplyTextTypeProps } from "./Interfaces/IReplyTextType";
import ReplyTextType from "./ReplyTextType";


class TextTypeCreator implements IMessageFactory {
  DefaultType = (props: DefaultTextMessageProps) => (
    <DefaultTextType {...props}/>
  );

  ReplyType = (props: ReplyTextTypeProps) => (
    <ReplyTextType {...props} />
  );
}

export default TextTypeCreator;