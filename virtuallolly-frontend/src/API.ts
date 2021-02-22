/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type LollyInput = {
  flavourTop: string,
  flavourMiddle: string,
  flavourBottom: string,
  message: string,
  recipientName: string,
  senderName: string,
  lollyPath?: string | null,
};

export type Lolly = {
  __typename: "Lolly",
  flavourTop?: string,
  flavourMiddle?: string,
  flavourBottom?: string,
  message?: string,
  recipientName?: string,
  senderName?: string,
  lollyPath?: string | null,
};

export type AddLollyMutationVariables = {
  lolly?: LollyInput,
};

export type AddLollyMutation = {
  addLolly:  {
    __typename: "Lolly",
    flavourTop: string,
    flavourMiddle: string,
    flavourBottom: string,
    message: string,
    recipientName: string,
    senderName: string,
    lollyPath?: string | null,
  },
};

export type GetLollyQueryVariables = {
  lollyPath?: string,
};

export type GetLollyQuery = {
  getLolly:  {
    __typename: "Lolly",
    flavourTop: string,
    flavourMiddle: string,
    flavourBottom: string,
    message: string,
    recipientName: string,
    senderName: string,
    lollyPath?: string | null,
  },
};
