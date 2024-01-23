@if($message = flash()->get())
    <div class="{{ $message->class() }} flashMassege">

        {{ $message->message() }}

    </div>
@endif

@if ($errors->any())
    <div class="class__alert flashMassege">

            @foreach ($errors->all() as $error)
            {{ $error }}<br />
            @endforeach

    </div>
@endif
