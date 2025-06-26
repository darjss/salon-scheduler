import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Container } from "@/components/shared/Container";
import { Header } from "@/components/shared/Header";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/lib/context/AuthContext";

export default function StaffDashboard() {
  const { user } = useAuth();

  const todayStats = [
    { label: "Total Appointments", value: "8", color: "bg-blue-500" },
    { label: "Completed", value: "5", color: "bg-green-500" },
    { label: "Remaining", value: "3", color: "bg-orange-500" },
    { label: "Revenue", value: "₮180K", color: "bg-purple-500" },
  ];

  const upcomingAppointments = [
    { id: 1, client: "Сарангэрэл", service: "Hair Cut", time: "10:00 AM" },
    { id: 2, client: "Оюунчимэг", service: "Hair Color", time: "11:30 AM" },
    { id: 3, client: "Батбаяр", service: "Manicure", time: "2:00 PM" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView>
        <Container className="py-4">
          <Header title={`Welcome, ${user?.name || "Staff"}`} />

          <Text className="text-lg font-semibold text-foreground mt-4 mb-2">
            Today's Stats
          </Text>

          <View className="flex-row flex-wrap justify-between gap-4">
            {todayStats.map((stat) => (
              <Card
                key={stat.label}
                className={`w-[48%] ${stat.color} p-4 rounded-lg shadow-sm`}
              >
                <Text className="text-white text-sm">{stat.label}</Text>
                <Text className="text-white text-xl font-bold">
                  {stat.value}
                </Text>
              </Card>
            ))}
          </View>

          <Text className="text-lg font-semibold text-foreground mt-6 mb-2">
            Upcoming Appointments
          </Text>

          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} className="p-4 mb-2 bg-card">
              <Text className="text-base font-medium text-card-foreground">
                {appointment.client}
              </Text>
              <Text className="text-sm text-muted-foreground">
                {appointment.service} at {appointment.time}
              </Text>
            </Card>
          ))}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
