import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import PostBoardPageUI from "./PostBoard.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./PostBoard.queries";
import { IMyVariables, IPostBoardPage } from "./PostBoard.types";
import {
  IBoardAddressInput,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode/lib/loadPostcode";

export default function PostBoardPage(props: IPostBoardPage) {
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [activateBtn, setActivateBtn] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [zipcode, setZipcode] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setActivateBtn(true);
    } else {
      setActivateBtn(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setActivateBtn(true);
    } else {
      setActivateBtn(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setActivateBtn(true);
    } else {
      setActivateBtn(false);
    }
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setActivateBtn(true);
    } else {
      setActivateBtn(false);
    }
  };

  const onToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  const PostSearchComplete = (data: Address) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    onToggleModal();
  };

  const onChangeExtraAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.currentTarget.value);
  };

  const onClickSubmit = async () => {
    const boardAddress: IBoardAddressInput = {};
    if (address) boardAddress.address = address;
    if (zipcode) boardAddress.zipcode = zipcode;
    if (addressDetail) boardAddress.addressDetail = addressDetail;
    console.log(boardAddress);
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer, // shorthand-property : 객체에서 key와 property가 같을 때 사용
              password,
              title,
              contents,
              boardAddress,
            },
          },
        });
        await router.push(`http://localhost:3000/boards/${String(result.data?.createBoard._id)}`);
        console.log(result);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    const myVariables: IMyVariables = {};
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    try {
      await updateBoard({
        variables: { updateBoardInput: myVariables, boardId: String(router.query._Id), password },
      });
      await router.push(`http://localhost:3000/boards/${String(router.query._Id)}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <PostBoardPageUI
      isEdit={props.isEdit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      activateBtn={activateBtn}
      data={props.data}
      onToggleModal={onToggleModal}
      toggleModal={toggleModal}
      PostSearchComplete={PostSearchComplete}
      onChangeExtraAddress={onChangeExtraAddress}
      address={address}
      zipcode={zipcode}
    />
  );
}
