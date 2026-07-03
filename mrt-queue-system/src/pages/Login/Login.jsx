import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            MRT Queue System
          </CardTitle>

          <CardDescription>
            Onko-Karmed navbat boshqaruv tizimi
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="admin@onkokarmed.uz"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>

              <Input
                id="password"
                type="password"
                placeholder="********"
              />
            </div>

            <Button className="w-full">
              Kirish
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;