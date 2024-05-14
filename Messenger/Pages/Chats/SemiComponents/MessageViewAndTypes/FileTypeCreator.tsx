import React from "react";
import { IMessageFactory } from "../Interfaces/IMessageFactory";
import ReplyFileType from "./ReplyFileType";
import DefaultFileType from "./DefaultFileType";
import { DefaultFileTypeProps } from './Interfaces/IDefaultFileType';
import { ReplyFileTypeProps } from './Interfaces/IReplyFileType';

class FileTypeCreator implements IMessageFactory {
  DefaultType = (props: DefaultFileTypeProps) => (
    <DefaultFileType {...props}/>
  );

  ReplyType = (props: ReplyFileTypeProps) => (
    <ReplyFileType {...props} />
  );
}

export default FileTypeCreator;