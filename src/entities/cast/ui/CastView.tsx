import { memo, type FC } from "react";
import { useCast } from "../model/useCast";
import { createImageUrl } from "../../../shared/utils";
import { useNavigate } from "react-router-dom";
import img from "@/shared/assets/footer.svg"

interface Props {
  id: string;
  type: string;
}

export const CastView: FC<Props> = memo((props) => {
  const { id, type } = props;
  const { getCasts } = useCast();
  const { data } = getCasts(id);
  const navigate = useNavigate();

  return (
    <div className="container py-6">
      <div className="flex gap-4 overflow-x-auto">
        {data &&
          data?.[type]?.map((item: any) => {
            const imageUrl = item.profile_path
              ? createImageUrl(item.profile_path)
              : img;

            return (
              <div
                onClick={() => navigate(`/crew/${item.id}`)}
                key={item.id}
                className="min-w-[150px] cursor-pointer"
              >
                <img
                  src={imageUrl}
                  alt={item.original_name}
                  className="w-[150px] h-[225px] object-cover rounded-xl shadow"
                />
                <h3 className="font-medium mt-2 line-clamp-1">
                  {item.original_name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {type === "cast" ? item.character : item.job}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
});
