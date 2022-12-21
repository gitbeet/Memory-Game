interface Props {
  title: string;
  data: string;
}

const InfoBox = ({ title, data }: Props) => {
  return (
    <div className="flex text-md justify-between bg-neutral-150  border-2 border-neutral-200 px-6 py-4  rounded-xl">
      <p className="">{title}: </p>
      <p className="w-24 text-right">{data}</p>
    </div>
  );
};

export default InfoBox;
