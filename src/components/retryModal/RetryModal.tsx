import {Button, Modal} from "antd";

const RetryModal = ({handleRetry}: {handleRetry: () => void}) => {
  return (
    <Modal
      open={true}
      centered
      maskClosable={false}
      closeIcon={null}
      footer={(_, {}) => (
        <>
          <Button onClick={handleRetry}>Retry</Button>
        </>
      )}
    >
      <h1>You Win!</h1>
      <p>You have successfully finished the Famous Landmarks Bingo game!</p>
    </Modal>
  );
};

export default RetryModal;
