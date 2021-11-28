package com.zyplayer.doc.grpc.service;


import com.google.protobuf.Empty;
import com.google.protobuf.Timestamp;
import com.nxest.grpc.server.GrpcService;
import com.zyplayer.doc.grpc.proto.HelloRequest;
import com.zyplayer.doc.grpc.proto.HelloResponse;
import com.zyplayer.doc.grpc.proto.TimeResponse;
import com.zyplayer.doc.grpc.proto.ZyplayerGreeterGrpc;
import io.grpc.stub.StreamObserver;

@GrpcService
public class HelloWorldService extends ZyplayerGreeterGrpc.ZyplayerGreeterImplBase {
	
	@Override
	public void sayHello(HelloRequest request, StreamObserver<HelloResponse> responseObserver) {
		HelloResponse reply = HelloResponse.newBuilder().setMessage("Hello " + request.getName()).build();
		responseObserver.onNext(reply);
		responseObserver.onCompleted();
	}
	
	@Override
	public void sayTime(Empty request, StreamObserver<TimeResponse> responseObserver) {
		TimeResponse reply = TimeResponse.newBuilder().setTime(Timestamp.newBuilder().build()).build();
		responseObserver.onNext(reply);
		responseObserver.onCompleted();
	}
}
