import React, { useState } from "react";
import avatar from "../../../statics/images/avatar.jpg";
const Comment = () => {
  const [showReplies, setShowReplies] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const replies = [
    {
      id: 1,
      name: "Nguyen Van A",
      time: "30 phút",
      content: "Mình cũng đang cần link!",
    },
    {
      id: 2,
      name: "Tran Van B",
      time: "20 phút",
      content: "Bạn share link ở đâu vậy?",
    },
    {
      id: 3,
      name: "Le Thi C",
      time: "10 phút",
      content: "Đồng ý, mong bạn gửi sớm.",
    },
  ];

  const handleShowReply = () => {
    setShowReplies(!showReplies);
    setIsComment(false);
    setIsReply(false);
  };

  const handleReply = () => {
    setIsReply(!isReply);
    setIsComment(false);
  };

  return (
    <div className="form-comment bg-light-subtle rounded-bottom p-3">
      <h4 className="border-bottom border-info mb-4">
            <i className="fa-regular fa-comment"></i>
            BÌNH LUẬN
          </h4>
      {/* Ô và nút comment */}
      <div className="form-floating vietcomment">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          onClick={() => setIsComment(true)}
        ></textarea>
        <label for="floatingTextarea2">Nhập bình luận...</label>
      </div>
      {isComment && (
        <button type="button" class="btn btn-primary mt-3">
          Gửi
        </button>
      )}
      {/* Hiển thị comment */}
      <div className="my-3 hienthicomment">
        <div className="d-flex comment">
          <img src={avatar} alt="Avatar" className="rounded-circle me-3" />
          <div className="w-100">
            <div className="d-flex">
              <h6 className="mb-0">Vô Cực Thiên Tôn</h6>
              <small className="text-body-secondary ms-2">Chapter 1</small>
            </div>
            <p className="">Thiên thượng thiên hạ, duy ngã độc tôn.</p>
            <div className="d-flex">
              <button
                className="btn btn-light p-0 me-3"
                onClick={() => setIsLike(!isLike)}
              >
                {isLike ? (
                  <i className="fa-solid fa-thumbs-up me-2"></i>
                ) : (
                  <i className="fa-regular fa-thumbs-up me-2"></i>
                )}
                Thích
              </button>
              <button className="btn btn-light p-0" onClick={handleReply}>
                <i className="fa-solid fa-reply me-2"></i>
                Phản hồi
              </button>
              <i className="text-body-secondary ms-2">1 giờ trước</i>
            </div>
            {isReply && (
              <div className="form-floating vietcomment">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Nhập bình luận...</label>
              </div>
            )}
            {isReply && (
              <button type="button" class="btn btn-primary mt-3">
                Gửi
              </button>
            )}
          </div>
        </div>
        {/* Hiển thị phản hồi trong comment */}
        <div className="text-body-secondary phanhoi ms-5">
          <button
            className="btn btn-link text-decoration-none text-dark p-0"
            onClick={handleShowReply}
          >
            {showReplies
              ? "Ẩn phản hồi"
              : `Xem tất cả ${replies.length} phản hồi`}
          </button>
          {showReplies && (
            <div className="mt-3">
              {replies.map((reply) => (
                <div key={reply.id} className="d-flex mb-3">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{reply.name}</h6>
                    </div>
                    <p className="mb-0">{reply.content}</p>
                    <div className="d-flex">
                      <button
                        className="btn btn-light p-0 me-3"
                        onClick={() => setIsLike(!isLike)}
                      >
                        {isLike ? (
                          <i className="fa-solid fa-thumbs-up me-2"></i>
                        ) : (
                          <i className="fa-regular fa-thumbs-up me-2"></i>
                        )}
                        Thích
                      </button>
                      <button
                        className="btn btn-light p-0"
                        onClick={handleReply}
                      >
                        <i className="fa-solid fa-reply me-2"></i>
                        Phản hồi
                      </button>
                      <i className="text-body-secondary ms-2">1 giờ trước</i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
