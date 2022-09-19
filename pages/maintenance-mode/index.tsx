import React from 'react';

import MaintenanceModePage from '@components/MaintenanceMode';
import { MainLayoutStatic } from '@components/MainLayout';

export default function MaintenanceMode() {
  return (
    <MainLayoutStatic hasNoFooterPadding >
      <MaintenanceModePage />
    </MainLayoutStatic>
  );
}
