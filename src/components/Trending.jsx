import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

const Trending = () => {
  const { response, Loading } = useAxios("search/trending");
  // console.log(response);

  if (Loading) {
    return (
      <div className='wrapper-container mt-8'>
        <Skeleton className='h-8 w-31' />
        <Skeleton className='h-8 w-full mt-2' />
        <Skeleton className='h-8 w-full mt-2' />
        <Skeleton className='h-8 w-full mt-2' />
      </div>
    );
  }

  return (
    <div className='mt-8'>
      <h1 className='text-2xl mb-2'>Trending</h1>
      {response &&
        response.coins.map((coin) => (
          <CoinTrending key={coin.item.coin_id} coin={coin.item} />
        ))}
    </div>
  );
};

export default Trending;
