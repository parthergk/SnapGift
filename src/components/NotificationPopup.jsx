import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

const NotificationPopup = ({ isOpen, onClose, title, message, isSuccess = true }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-lg p-6">
        <DialogHeader>
          <div className="mx-auto mb-4">
            {isSuccess ? (
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            ) : (
              <XCircle className="h-12 w-12 text-red-500" />
            )}
          </div>
          <DialogTitle className="text-center text-xl font-semibold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center mt-2">
            {message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex justify-center items-center">
          <Button 
            onClick={onClose}
            className={`w-32 ${
              isSuccess 
                ? "bg-green-500 hover:bg-green-600" 
                : "bg-red-500 hover:bg-red-600"
            } text-white`}
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationPopup;