import Favorite from 'public/other/favorite.svg';
import Debounce from 'lodash/debounce';
import styles from '@components/Card/Card.styles.module.scss';
import FavoriteClear from 'public/other/favorite_clear.svg';
import likeStyles from './Like.module.scss';
import { ICardItem } from '@components/Card/Card';
import { likeNFTRequest } from '@entities/nft/redux/actions';
import { useDispatch } from 'react-redux';
import { INFTDetail } from '@type/nft';
import { isLoggedIn, user2FAPassed } from '@utils/token';

import classNames from 'classnames';
import Link from 'next/link';

const DEBOUNCE_TIME = 500;

export const LikeHelper = (
  item: ICardItem | INFTDetail,
  color?: 'default' | 'primary'
) => {
  const dispatch = useDispatch();

  const handleLikeNFT = (event, item, like) => {
    event.stopPropagation();
    dispatch(likeNFTRequest({ id: item.id, like: !like }));
  };
  const isFavorite = item.liked || item.likes;

  return (
    <>
      <div
        className={classNames(
          likeStyles['like-wrapper'],
          isFavorite && likeStyles['like-favorite'],
          color === 'primary'
            ? likeStyles['like-primary']
            : likeStyles['like-default']
        )}
      >
        {isLoggedIn() && user2FAPassed() ? (
          isFavorite ? (
            <Favorite
              onClick={Debounce((e) => {
                handleLikeNFT && handleLikeNFT(e, item, isFavorite);
              }, DEBOUNCE_TIME)}
              className={likeStyles.icon}
            />
          ) : (
            <FavoriteClear
              onClick={Debounce((e) => {
                handleLikeNFT && handleLikeNFT(e, item, isFavorite);
              }, DEBOUNCE_TIME)}
              className={likeStyles.icon}
            />
          )
        ) : (
          <>
            <div className={classNames(likeStyles.tooltipWrapper)}>
              <span
                className={classNames(
                  likeStyles.tooltipBottom,
                  likeStyles.tooltip
                )}
              >
                Please{' '}
                <Link href='/signin'>
                  <a className={likeStyles.link}>Sign in</a>
                </Link>
              </span>
            </div>
            <FavoriteClear
              className={classNames(
                likeStyles.icon,
                likeStyles['icon-favorite'],
                color === 'primary'
                  ? likeStyles['icon-primary']
                  : likeStyles['icon-default']
              )}
              onClick={(e) => e.stopPropagation()}
            />
          </>
        )}
      </div>
    </>
  );
};
