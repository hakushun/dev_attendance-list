import { useDispatch, useSelector } from 'react-redux';
import { Attendance } from '../redux/modules/attendance';
import { Covid, selectCovid } from '../redux/modules/covid';
import {
  create,
  fetch,
  selectAnswerResult,
  selectCovids,
  selectIsLoading,
  selectUnansweredUsers,
} from '../redux/modules/covids';

type Hooks = {
  covids: Covid[];
  isLoading: boolean;
  answerRuselt: (Covid & { name: string | undefined; part: string | undefined })[];
  unasweredUsers: Attendance[];
  handleFetch: (_dateId: string) => void;
  handleCreate: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const useCovids = (eventId: string): Hooks => {
  const dispatch = useDispatch();
  const covid = useSelector(selectCovid);
  const covids = useSelector(selectCovids);
  const isLoading = useSelector(selectIsLoading);
  const answerRuselt = useSelector(selectAnswerResult);
  const unasweredUsers = useSelector(selectUnansweredUsers);

  const handleFetch = (dateId: string) => {
    dispatch(fetch({ eventId, dateId }));
  };

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(create({ eventId, covid }));
  };
  return { covids, isLoading, answerRuselt, unasweredUsers, handleFetch, handleCreate };
};
