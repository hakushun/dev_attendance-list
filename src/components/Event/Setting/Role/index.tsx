import React from 'react';
import { useRole } from '../../../../hooks/useRole';
import { Attendance } from '../../../../redux/modules/attendance';
import { Part } from '../../../../redux/modules/part';
import { ProgramItem } from '../../../../redux/modules/program';
import { Loading } from '../../../uiParts/Loading';
import { Role as Presentational } from './Role';

type Props = {
  handleToggleSetting: () => void;
  programs: ProgramItem[];
  parts: Part[];
  attendances: Attendance[];
  isLoading: boolean;
  handleUpdate: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const Role: React.VFC<Props> = ({
  handleToggleSetting,
  programs,
  parts,
  attendances,
  isLoading,
  handleUpdate,
}) => {
  const { programId, roles, handleChangeRadio, handleChangeRole } = useRole();

  if (isLoading) return <Loading />;

  return (
    <Presentational
      handleToggleSetting={handleToggleSetting}
      programs={programs}
      parts={parts}
      attendances={attendances}
      isLoading={isLoading}
      handleUpdate={handleUpdate}
      programId={programId}
      roles={roles}
      handleChangeRadio={handleChangeRadio}
      handleChangeRole={handleChangeRole}
    />
  );
};
