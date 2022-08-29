import React from 'react';

import MaintenanceModePage from '@components/MaintenanceMode';
import { MainLayoutStatic } from '@components/MainLayout';

export default function MaintenanceMode() {
  return (
    <MainLayoutStatic>
      <MaintenanceModePage />
    </MainLayoutStatic>
  );
}
