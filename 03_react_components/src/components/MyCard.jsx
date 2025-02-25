import Card from "./NomalCard";

const MyCard = () => {
  return (
    <div>
      <Card
        header={<h2>卡片标题</h2>}
        body={
          <>
            <p>这是卡片的主要内容。</p>
          </>
        }
        footer={
          <>
            <button>操作1</button>
            <button>操作2</button>
          </>
        }
      />
    </div>
  );
};

export default MyCard;
