import React from 'react';
import { DefaultTextMessageProps } from '../MessageViewAndTypes/Interfaces/IDefaultTextType';
import { ReplyTextTypeProps } from '../MessageViewAndTypes/Interfaces/IReplyTextType';
import { DefaultFileTypeProps } from '../MessageViewAndTypes/Interfaces/IDefaultFileType';
import { ReplyFileTypeProps } from '../MessageViewAndTypes/Interfaces/IReplyFileType';

export interface IMessageFactory {
  DefaultType: (props: DefaultTextMessageProps | DefaultFileTypeProps | any) => JSX.Element;
  ReplyType: (props: ReplyTextTypeProps | ReplyFileTypeProps | any) => JSX.Element;
}