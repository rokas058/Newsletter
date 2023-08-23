package com.tietoevry.backend.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
@EnableAsync
public class AsyncConfig {
    @Value("${async.config.pole}")
    private int corePoleSize;
    @Value("${async.config.max}")
    private int coreMaxSize;
    @Value("${async.config.queue}")
    private int queueCapacity;

    @Bean(name = "asyncExecutor")
    public TaskExecutor asyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(corePoleSize); // Set the desired core pool size
        executor.setMaxPoolSize(coreMaxSize); // Set the maximum pool size
        executor.setQueueCapacity(queueCapacity); // Set the queue capacity
        executor.initialize();
        return executor;
    }
}
