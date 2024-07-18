"use client";

import ReduxProvider from "@/store/redux-provider";
import { ConfigForm } from "@/components/pages/config/config-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FirstCard() {
  const saveForm = () => {};

  return (
    <div className="min-w-80 w-96 max-w-full flex flex-col gap-4">
      <p className="text-2xl font-bold">Configure the API</p>
      <Card>
        <CardContent className="p-4">
          <ReduxProvider>
            <ConfigForm saveForm={saveForm} id={"home-comfig"} />
          </ReduxProvider>
        </CardContent>
      </Card>
      <Button form="home-comfig" type="submit">
        Save
      </Button>
    </div>
  );
}
